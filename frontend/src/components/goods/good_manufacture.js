import React from 'react';
import { Link } from 'react-router-dom';
import GoodBox from './good_box';

class GoodManufacture extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            properties: "",
            quantity: "",
            photo: "",
            newGood: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ newGood: nextProps.newGood.title });
    }

    handleSubmit(e) {
        e.preventDefault();
        let good = {
            title: this.state.title,
            description: this.state.description,
            properties: this.state.properties,
            quantity: this.state.quantity,
            photo: this.state.photo
        };

        this.props.manufactureGood(good);
        this.setState({ 
            title: '',
            description: '',
            properties: '',
            quantity: '',
            photo: ''
        });

        let path = window.location.href.split('/#/');
        path[1] = 'goods';
        path = path.join('/#/');
        window.location.href = path;
    }

    update(type) {
        if (type === "title") {
            return e => this.setState({
                title: e.currentTarget.value
            });
        }
        if (type === "description") {
            return e => this.setState({
                description: e.currentTarget.value
            });
        }
        if (type === "properties") {
            return e => this.setState({
                properties: e.currentTarget.value
            });
        }
        if (type === "quantity") {
            return e => this.setState({
                quantity: e.currentTarget.value
            });
        }
        if (type === "photo") {
            return e => this.setState({
                photo: e.currentTarget.value
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <input type="textarea"
                            value={ this.state.title }
                            onChange={ this.update("title") }
                            placeholder="Title of Good..."
                        />
                        <br />
                        <input type="textarea"
                            value={ this.state.description }
                            onChange={ this.update("description") }
                            placeholder="Description of Good..."
                        />
                        <br />
                        <input type="textarea"
                            value={ this.state.properties }
                            onChange={ this.update("properties") }
                            placeholder="Properties of Good..."
                        />
                        <br />
                        <input type="textarea"
                            value={ this.state.quantity }
                            onChange={ this.update("quantity") }
                            placeholder="Quantity of Good..."
                        />
                        <br />
                        <input type="textarea"
                            value={ this.state.photo }
                            onChange={ this.update("photo") }
                            placeholder="Photo of Good..."
                        />
                        <br />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                {/* <GoodBox text={ this.props.newGood } /> */}
            </div>
        )
    }
}

export default GoodManufacture;