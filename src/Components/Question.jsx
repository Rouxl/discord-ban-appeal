import React, {Component} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import './question.css'

class Question extends Component {
    state = {
        chars_used: 0,
        character_limit: 2048
    }

    constructor(props) {
        super(props);
        this.handleWordCount = this.handleWordCount.bind(this);
    }
    componentDidMount() {
        if (this.props.characterLimit > 2048) {
            this.setState({character_limit: 2048})
        } else {
            this.setState({character_limit: this.props.characterLimit})

        }
    }


    handleWordCount(event) {
        const charCount = event.target.value.length;
        this.setState({chars_used: charCount});
        this.props.handleChange(event)
    }

    render() {
        return (
            <React.Fragment>
                <InputLabel htmlFor={(this.props.question.toLowerCase()).replaceAll(" ", "-")}>
                    {this.props.question}
                </InputLabel>
                <TextField variant="outlined" className={"textarea"}
                           onChange={this.handleWordCount}
                           inputProps={{maxLength: this.state.character_limit}}
                           helperText={`${this.state.chars_used}/${this.state.character_limit}`}
                           id={(this.props.question.toLowerCase()).replaceAll(" ", "-")}
                           name={this.props.question}
                           fullWidth multiline rows={4} required/>
            </React.Fragment>
        );
    }
}

export default Question;
