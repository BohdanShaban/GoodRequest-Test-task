import { Component } from "react";
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {changePageNum} from '../../actions'
import './prevPageBtn.css'



class PrevPageBtn extends Component { 

    prevBtnClicked = () => {

        return new Promise( (resolve, reject) => {
            this.props.changePageNum(-1); 
            resolve();

        }).then( () => {
            
            if(this.props.currentPage === 0) {
                console.log('FIRST PAGE ...............');
    
            }
        })
    } 




    render() {
        let {pageTxt, currentPage} = this.props; 
        const pageNum = --currentPage;

        return (
        
            

            <div onClick={ this.prevBtnClicked  }  > 

                <Link to={ pageNum.toString() } className='prev-page-btn'
                      style={{textDecoration:"none"}}
                > 
                    {pageTxt}
                </Link>
            </div>
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
}
const mapDispatchToProps = {
    changePageNum
}

export default connect(mapStateToProps, mapDispatchToProps)(PrevPageBtn);