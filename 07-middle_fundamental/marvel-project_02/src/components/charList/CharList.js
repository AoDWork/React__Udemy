
import { Component } from 'react'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelSevices';

import './charList.scss';


class CharList extends Component {
    state = {
        firstNineChars: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChars()
    }

    onCharsLoaded = (firstNineChars) => {
        this.setState({
            firstNineChars,
            loading: false,
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChars = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharsLoaded)
            .catch(this.onError)
    }

    render() {
        const { firstNineChars, loading, error } = this.state
        const spinner = loading ? <Spinner /> : null
        const errorMessage = error ? <ErrorMessage /> : null
        const content = !(loading || error) ? <View firstNineChars={firstNineChars} /> : null

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {errorMessage}
                    {spinner}
                    {content}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

const View = ({ firstNineChars }) => {
    const { name, thumbnail } = firstNineChars
    const thumbnailImg = thumbnail.includes('not')
        ? <img src={thumbnail} style={{ objectFit: "contain" }} alt="Random character" className="randomchar__img" />
        : <img src={thumbnail} alt="Random character" className="randomchar__img" />

    return (
        <li className="char__item">
            <img src={thumbnailImg} alt="img" />
            <div className="char__name">{name}</div>
        </li>
    )
}

export default CharList;