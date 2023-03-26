import '../styles/main.css'
import { QRCodeSVG } from 'qrcode.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

export const Main = (props) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    const handleCopyClick = () => {
    }

    return (
        <div className="mainDiv">
            <form onSubmit={ handleFormSubmit }>
                {/* Enter URL Text */ }
                <label htmlFor="urlText">
                    URL:
                    <input name='url' type="url" value={ props.urlText } id="urlText" onChange={ props.changeURLinput } />
                </label>

                {/* Enter text you want to change with */ }
                {
                    props.valid && props.isClicked ?
                        (<label htmlFor='convertedText'>
                            Your ZipLink:
                            <a id='convertedLink' target="_blank" rel='noopener noreferrer' href={ props.urlText }>ZipLink/{ props.changeText }</a>
                            { props.makeQR ? <QRCodeSVG value={ props.urlText } text={ props.changeText } className="qrCode" /> : null }
                        </label>) :
                        (props.makeAnother ?
                            (<label htmlFor='toChangeText'>
                                Text to change with:
                                <input name='text' type="text" id='toChangeText'
                                    value={ props.changeText } onChange={ props.toChangeText } />
                            </label>) :
                            (<label htmlFor='toChangeText'>
                                Text to change with:
                                <input name='text' type="text" id='toChangeText'
                                    value={ props.changeText } onChange={ props.toChangeText } />
                            </label>)
                        )
                }

                {/* Change button */ }
                {
                    props.isClicked ?
                        (<div className='flexBtn' >
                            { props.makeQR ?
                                <button className='btn' onClick={ props.hideQR } >Hide QR</button> :
                                <button onClick={ props.qrCodeBtn } className="btn">Show QR</button>
                            }
                            <button className='btn' onClick={ handleCopyClick } ><FontAwesomeIcon icon={ faCopy } /></button>
                            <button onClick={ props.makeAnother } className='btn'>Make Another</button>
                        </div>) :
                        (<button onClick={ props.changeButton } className="btn" style={ { margin: 'auto' } } >Make ZipLink</button>)
                }

            </form>
        </div>
    )
}
