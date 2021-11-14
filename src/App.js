// import { withRouter } from 'react-router-dom'

class HTMLContent extends React.Component {
  contentClickHandler = (e) => {
    const targetLink = e.target.closest('a');
    if(!targetLink) return;
    e.preventDefault();
    
    console.log(targetLink.href); // this.props.history.push(e.target.href)
  };
  
  render() {
    return (
      <div 
        onClick={this.contentClickHandler}
        dangerouslySetInnerHTML={{__html: this.props.content}} 
      />
    );
  }
}

// export default withRouter(HTMLContent);

const content = `<div>
  <a href="http://www.first-link.com">Link 1</a>
  <a href="http://www.second-link.com"><span>Link 2</span></a>
</div>`;

ReactDOM.render(
  <HTMLContent content={content} />,
  demo
);
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<div id="demo"></div>