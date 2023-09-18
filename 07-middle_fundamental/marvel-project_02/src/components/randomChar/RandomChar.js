
import {Component} from 'react'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelSevices';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar()
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
        })
        console.log(this.state.char.thumbnail.includes('not'))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }


    render() {
        const {char, loading, error} = this.state
        const spinner = loading  ? <Spinner /> : null
        const errorMessage = error ? <ErrorMessage /> : null
        const content = !( loading || error) ? <View char={char} /> : null

        return (
            <div className="randomchar">
               { errorMessage }
               { spinner }
               { content }
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char
    const descriptionRes = description ? description : "There is no description for this character"
    const thumbnailImg = thumbnail.includes('not') 
                        ? <img src={thumbnail} style={{objectFit:"contain"}} alt="Random character" className="randomchar__img"/> 
                        : <img src={thumbnail} alt="Random character" className="randomchar__img"/>

    return (
        <div className="randomchar__block">
            {thumbnailImg} 
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {descriptionRes}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;