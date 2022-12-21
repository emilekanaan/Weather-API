import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };

    }

    handleChange(e) {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <>
                <header>
                    <form>
                        <input
                            placeholder="Type in a city name"
                            className="cityInput"
                            onChange={(e) => this.setState({ input: e.target.value })}
                            autoFocus

                        />
                        <button onClick={(e) => {
                            e.preventDefault()
                            this.props.click(this.state.input)
                        }
                        }>FIND WEATHER</button>
                    </form>
                </header>
            </>
        )
    }
}

export default Search;