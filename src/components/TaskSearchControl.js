import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywork: "",
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value,
        });
    };

    onSearch = () => {
        this.props.onSearch(this.state.keywork);
    }
    render() {
        var { keywork } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        name="keywork"
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa"
                        value={keywork}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onSearch}
                        >
                            Tìm kiếm
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
