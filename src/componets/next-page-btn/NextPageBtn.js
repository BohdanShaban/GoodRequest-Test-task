import { Component } from "react";
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {changePageNum} from '../../actions'
import './nextPageBtn.css'



class NextPageBtn extends Component { 

    nextBtnClicked = () => {

        this.props.changePageNum(1);

        // console.log(`CURRENT PAGE : ${this.props.currentPage}`);
        // setTimeout( () => {
        //     console.log(`CURRENT PAGE in 1 sec: ${this.props.currentPage}`);
        // }, 500) 

        

        if(this.props.currentPage === 2) {
            console.log('SEND DATA TO SERVER ...............');
        }
        
    } 




    render() {
        let {pageTxt, currentPage} = this.props; 
        const pageNum = ++currentPage;


        return (
        
            

            <div onClick={ this.nextBtnClicked  }  > 

                <Link to={ pageNum.toString() } className='next-page-btn'
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

export default connect(mapStateToProps, mapDispatchToProps)(NextPageBtn);