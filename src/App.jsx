import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { useState } from 'react';

function App() {

  let [initialURLText, setinitialURLText] = useState('');
  let [changeText, setchangeText] = useState('');
  let [buttonClicked, setbuttonClicked] = useState(false);
  let [isValidURL, setisValidURL] = useState(false)
  let [makeAnother, setmakeAnother] = useState(false)
  let [generateQR, setgenerateQR] = useState(false)
  let [hideQRcode, sethideQRcode] = useState(false)

  const handleURLTextchange = (e) => {
    const urltexttrim = e.target.value.trim();
    setinitialURLText(urltexttrim)
    // console.log(urltexttrim);
  }

  const handleChangeText = (e) => {
    const textTrim = e.target.value.trim();
    setchangeText(textTrim);
    // console.log(textTrim);
  }

  const handleChangeButton = () => {
    const changeTextLength = changeText.length;
    const initialURLTextLength = initialURLText.length;

    if (initialURLTextLength === 0 || changeTextLength === 0) {
      alert('Enter the details first')
    } else {
      try {
        const url = new URL(initialURLText)
        if (url.href !== initialURLText) {
          // console.log(url);
          throw new Error();
        }
        isValidURL = true;
        buttonClicked = true;
        setisValidURL(isValidURL)
        setbuttonClicked(buttonClicked)
      } catch (error) {
        console.error(error.message);
        alert('Please enter a valid URL');
        // return null;
      }
    }
  }

  const handleMakeAnotherBtn = () => {
    makeAnother = true
    setmakeAnother(makeAnother)

    buttonClicked = false;
    setbuttonClicked(buttonClicked)

    setinitialURLText("")
    setchangeText("")
  }

  const handleQRCodeGenerate = () => {
    generateQR = true;
    setgenerateQR(generateQR)
  }

  const handleHideQRBtn = () => {
    hideQRcode = true;
    sethideQRcode(hideQRcode);

    generateQR = false
    setgenerateQR(generateQR)
  }


  return (
    <>
      <Header />
      <Main
        urlText={ initialURLText }
        changeURLinput={ handleURLTextchange }
        changeText={ changeText }
        toChangeText={ handleChangeText }
        changeButton={ handleChangeButton }
        valid={ isValidURL }
        isClicked={ buttonClicked }
        makeAnother={ handleMakeAnotherBtn }
        qrCodeBtn={ handleQRCodeGenerate }
        makeQR={ generateQR }
        hideQR={ handleHideQRBtn }
        hideQRValue={ hideQRcode }
      />

    </>
  );
}

export default App;
