const React = require('react');
const {Component} = React;

class WordRelayClass extends Component {
    state = {
        word : '제로초',
        text : '',
        result : '시작'
    }
    

    onSubmitForm = (e) =>{
        e.preventDefault();
        
        if (this.state.word[this.state.word.length-1] === this.state.text[0]){
            this.setState({
                word : this.state.text,
                result : '딩동댕',
                text : '',
            })
            this.ref.focus();
            // this.state.word = this.state.text
            // this.state.result = this.state.text
            // this.state.text = ''
        } else {
            this.setState({
                result : "땡",
                text:''
            })
            this.ref.focus();
            // this.state.result = '땡 '+this.state.word
        }
        
    }
    
    onChangeInput = (e) => {
        // this.state.text = e.target.value;
        this.setState({
            text: e.target.value
        })
    }

    ref;
    onRefInput = (c) => {
        this.ref = c;
    }
    render(){
        return(
        <>
            <div>{this.state.word}</div>
            <form onSubmit = {this.onSubmitForm}>
                <input ref={this.onRefInput} value={this.state.text} onChange = {this.onChangeInput}/>
                <button>입력</button>
                
            </form>
            <div>{this.state.result}</div>
        </>
        )
    }
}
module.exports = WordRelayClass;