import React, { Component } from "react";

class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            status: false,
        };
    }

    componentWillMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status,
            });
        } else if (!nextProps.task) {
            this.setState({
                id: "",
                name: "",
                status: false,
            });
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    };

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === "status") {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        //Cancel & close form
        this.onClear();
        this.onCloseForm();
    };

    onClear = () => {
        this.setState({
            name: "",
            status: false,
        });
    };

    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== "" ? "Cập nhật công việc" : "Thêm công việc"}
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Tên :</label>
                        <select
                            name="status"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Chưa kích hoạt</option>
                        </select>
                        <hr />

                        <div id="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>
                                Lưu lại
                            </button>
                            &nbsp;&nbsp;
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.onClear}
                            >
                                <span className="fa fa-window-close mr-5"></span>
                                Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;