import React, {Component} from "react";
import Data from "./Utilities/Data";
import Country from "./Components/Country";

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: Data,
            date: new Date(),
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    render() {
        const countries = this.state.data.map((item) => {
            return(
                <Country 
                    flag={item.flag} name={item.name}
                    key={item.id}
                    timeDiffrence={item.timeDiffrence}
                    date={this.state.date}
                />
            )
        })

        return(
            <div>
                {countries}
            </div>
        )
    }
}

export default App