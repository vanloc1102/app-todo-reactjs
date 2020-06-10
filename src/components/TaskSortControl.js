import React, { Component } from "react";

class Sort extends Component {
    componentWillReceiveProps(nextProps) {}

    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
    };

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                    >
                        Sắp xếp
                        <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li
                            onClick={() => this.onClick("name", 1)}
                            className={
                                this.props.sortBy === "name" &&
                                this.props.sortValue === 1
                                    ? "sort-selected"
                                    : ""
                            }
                        >
                            <a role="button">
                                <span className="fa fa-sort-alpha-asc pr-5"></span>
                                Tên A-Z
                            </a>
                        </li>
                        <li onClick={() => this.onClick("name", -1)}
                        className={
                            this.props.sortBy === "name" &&
                            this.props.sortValue === -1
                                ? "sort-selected"
                                : ""
                        }>
                            <a role="button">
                                <span className="fa fa-sort-alpha-desc pr-5"></span>
                                Tên Z-A
                            </a>
                        </li>
                        <li onClick={() => this.onClick("status", 1)}
                        className={
                            this.props.sortBy === "status" &&
                            this.props.sortValue === 1
                                ? "sort-selected"
                                : ""
                        }>
                            <a role="button">Trạng thái kích hoạt</a>
                        </li>
                        <li onClick={() => this.onClick("status", -1)}
                        className={
                            this.props.sortBy === "status" &&
                            this.props.sortValue === -1
                                ? "sort-selected"
                                : ""
                        }>
                            <a role="button">Trạng thái ẩn</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;
