import React, { Component, Fragment } from 'react';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionType';
import { connect } from 'react-redux';

const TodoListAntd = (props) => {
	
	const { inputValue, list, handleInputChange, handleBtnClick, handleItemDelete } = props;
	return (
		<Fragment>
			<div>
				<input 
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button
					onClick={handleBtnClick}
				>
					submit
				</button>
			</div>
			<ul>
				{
					list.map((item, index) => {
						return <li key={index} onClick={() => { handleItemDelete(index) }}>{item}</li>
					})
				}
			</ul>
		</Fragment>
	)
}

// class TodoListAntd extends Component {

// 	render () {

// 		const { inputValue, handleInputChange, handleBtnClick, handleItemDelete } = this.props;

// 		return (
// 			<Fragment>
// 				<div>
// 					<input 
// 						value={inputValue}
// 						onChange={handleInputChange}
// 					/>
// 					<button
// 						onClick={handleBtnClick}
// 					>
// 						submit
// 					</button>
// 				</div>
// 				<ul>
// 					{
// 						this.props.list.map((item, index) => {
// 							return <li key={index} onClick={() => { handleItemDelete(index) }}>{item}</li>
// 						})
// 					}
// 				</ul>
// 			</Fragment>
// 		)
// 	}
// }

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		handleInputChange(e) {
			const action = {
				type: CHANGE_INPUT_VALUE,
				inputValue: e.target.value
			}
			dispatch(action);
		},
		handleBtnClick() {
			const action = {
				type: ADD_TODO_ITEM
			}
			dispatch(action);
		},
		handleItemDelete(index) {
			const action = {
				type: DELETE_TODO_ITEM,
				index
			}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListAntd);