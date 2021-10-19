import { Component } from "react";
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {changePageNum} from '../../actions'
import './nextPageBtn.css'



class NextPageBtn extends Component { 

    nextBtnClicked = () => {

        return new Promise( (resolve, reject) => {
            this.props.changePageNum(1); 
            resolve();

        }).then( () => {
            
            if(this.props.currentPage === 2) {
                console.log('SEND DATA TO SERVER ...............');
                
            }
        })
    } 

    render() {
        let {pageTxt, currentPage} = this.props; 
        const pageNum = ++currentPage;


        return (


            <buton type="submit" onClick={ this.nextBtnClicked  }  > 

                <Link to={ pageNum.toString() } className='next-page-btn'
                      style={{textDecoration:"none"}}
                > 
                            {pageTxt}
                </Link>

            </buton>
            
            
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