import React, { Component } from 'react'
import axios from 'axios'

class DogRegister extends Component {
    constructor(props) {
		super(props)
		this.state = {
            dog_name: "", 
            size: "", 
            breed: "", 
            activeness: "", 
            microchip: "", 
            social_children: "", 
            social_ppl: "", 
            social_dog: "",
            dog_url: ""
		}
        this.registerDog = this.registerDog.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

    registerDog() {
        axios.post("/api/dog-profile", {
            owner_id: this.props.user_id,
            dog_name: this.state.dog_name, 
            size: this.state.size, 
            breed: this.state.breed, 
            activeness: this.state.activeness, 
            microchip: this.state.microchip, //double check this later
            social_children: this.state.social_children, 
            social_ppl: this.state.social_ppl, 
            social_dog: this.state.social_dog,
            dog_url: this.state.dog_url
        })
    }

    render() {
        return(
            <form>
                <div className="form-group">
                    <label for="name">What is your dog's name?</label>
                    <input className="form-control" type="text" placeholder="Dog's Name" id="dog_name_input" name="dog_name" onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label for="breed">What is your dog's breed?</label>
                    <select className="form-control" id="breed_select" name="breed" onChange={this.handleChange}>
                        <option selected disabled="disabled">Choose Breed...</option>
                        <option value="Appenzeller Sennenhunde">Appenzeller Sennenhunde</option>
                        <option value="Beagle">Beagle</option>
                        <option value="Bulldog">Bulldog</option>
                        <option value="Cattledog">Cattledog</option>
                        <option value="Chowchow">ChowChow</option>
                        <option value="Collie">Collie</option>
                        <option value="Corgi">Corgi</option>
                        <option value="Dalmatian">Dalmatian</option>
                        <option value="EskimoDog">Eskimo Dog</option>
                        <option value="Hound">Hound</option>
                        <option value="Mastiff">Mastiff</option>
                        <option value="Mutt">Mutt</option>
                        <option value="Pinocher">Pinocher</option>
                        <option value="Pomeranian">Pomeranian</option>
                        <option value="Pug">Pug</option>
                        <option value="Retriever">Retriever</option>
                        <option value="Sheepdog">Sheepdog</option>
                        <option value="SheppardDog">Sheppard Dog</option>
                        <option value="Terrier">Terrier</option>
                        <option value="ShihTzu">Shih Tzu</option>
                        <option value="Spaniel">Spaniel</option>
                        <option value="Terrier">Terrier</option>
                        <option value="Yorkipoo">Yorkipoo</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="size">How large is your dog?</label>
                    <select className="form-control" id="size" name="size" onChange={this.handleChange}>
                    <option selected disabled="disabled">Choose Size...</option>
                        <option value="1">Small size (0-25 lbs)</option>
                        <option value="2">Medium size(26-54 lbs)</option>
                        <option value="3">Large size (55+ lbs)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="activeness">How Active is your dog?</label>
                    <select className="form-control" id="activeness" name="activeness" onChange={this.handleChange}>
                    <option selected disabled="disabled">Choose How Active Your Dog Is...</option>
                        <option value="1">One (Not Active)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five (Very Active)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="social_children">How social is your dog with children?</label>
                    <select className="form-control" id="social_children_select" name="social_children" onChange={this.handleChange}>
                        <option selected disabled="disabled">Choose How Your Dog Is With Children...</option>
                        <option value="1">One (not very social)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five (very social)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="social_people">How social is your dog with people?</label>
                    <select className="form-control" id="social_people_select" name="social_ppl" onChange={this.handleChange}>
                        <option selected disabled="disabled">Choose How Your Dog Is With People...</option>
                        <option value="1">One (not very social)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five (very social)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="social_dog">How social is your dog with other dogs?</label>
                    <select className="form-control" id="social_dog_select" name="social_dog" onChange={this.handleChange}>
                        <option selected disabled="disabled">Choose How Your Dog Is With Other Dogs...</option>
                        <option value="1">One (not very social)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five (very social)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="microchip">Does your dog have a microchip?</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="microchip" id="inlineRadio1" value="1" onChange={this.handleChange} />
                        <label className="form-check-label" for="inlineRadioYes">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="microchip" id="inlineRadio2" value="0" onChange={this.handleChange} />
                        <label className="form-check-label" for="inlineRadioNo">No</label>
                    </div>
                </div>

                <div className="form-group">
                    <label for="picture">Show us a picture of your dog</label>
                    <input className="form-control" type="text" placeholder="Dog's Picture URL" id="dog_picture_input" name="dog_url" onChange={this.handleChange}></input>
                </div>

                <button type="button" className="btn btn-secondary" onClick={this.registerDog}>Register</button>
                <button type="reset" className="btn btn-danger">Cancel</button>
            </form>
        )
    }
}

export default DogRegister;