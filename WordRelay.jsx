const React = require('react');
const {useState,useRef} = React;

const WordRelay = () => {
    
    const [word, setWord] = useState('제로초');
    const [text, setText] = useState('');
    const [result, setResult] = useState('시작');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        
        if (word[word.length-1] === text[0]){
            setWord(
                text
            )
            setResult(
                '딩동댕'
            )
            setText(
                ''
            )
            inputRef.current.focus();
            
        } else {
            setResult(
                '땡'
            )
            setText(
                ''
            )
            inputRef.current.focus();
            
        }
        
    }

    const onChangeInput = (e)=>{
        setText(
            e.currentTarget.value
        )
    }

    
    


    return (
        <>
            <div>{word}</div>  
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value = {text} onChange={onChangeInput} />
                <button>입력!!</button>
            </form>
            <div>{result}</div>
        </>
    )
}




module.exports = WordRelay;
