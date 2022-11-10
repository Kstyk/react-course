class Form extends React.Component {
    state = {
        city: "Londyn",
        text: "coś",
        isLoved: true,
        count: "0"
    }

    handleChange = (e) => {
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render() {
        const { city, text, isLoved, count } = this.state
        return (
            <div>
                <label>Podaj miasto
                    <input name="city" value={city} onChange={this.handleChange} type="text" name="city" id="" />
                </label>
                <br />
                <label>Napisz coś o tym mieście</label>
                <textarea name="text" value={text} onChange={this.handleChange}>
                </textarea><br></br>
                <label>
                    Czy lubisz to miasto?
                    <input name="isLoved" type="checkbox" checked={isLoved} onChange={this.handleChange} />
                </label><br />
                <label>
                    Ile razy tam byłeś?
                    <select name="count" value={count} onChange={this.handleChange.bind(this)}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="more">Więcej</option>
                    </select>
                </label>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Form />)
