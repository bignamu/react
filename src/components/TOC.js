import React, {Component} from 'react';
class TOC extends Component {
    shouldComponentUpdate(newProps,newState){
      console.log('TOC render shouldComponentUpdate',
        newProps.data,
        this.props.data
      );
      if(this.props.data === newProps.data){
        return false;
      }
      return true;
    }
    render() {
      let lists = [];
      let data = this.props.data;
      for (let da of data){
        lists.push(
        <li key={da.id}>
            <a 
              href={"/content/"+da.id}
              data-id={da.id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            >{da.title}</a>
          </li>)
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>    
      )
    }
  }

  export default TOC;