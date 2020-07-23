import React, { Component } from 'react'

class Meal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            meal_ingredients: [],
        }
    }

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => {
                // console.log(res.meal[0])
                this.get_meal(res.meals[0])
            })
    }

    buttonClick() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => {
                // console.log(res.meal[0])
                this.get_meal(res.meals[0])
            })
    }

    get_meal(meal) {
        let meal_ingredients = []
        let meal_img = ''
        let meal_video = ''
        let meal_source = ''
        let meal_category = meal['strCategory']
        let meal_area = meal['strArea']
        let meal_instructions = meal['strInstructions']
        let meal_name = meal['strMeal']
        if (meal['strMealThumb']) {
            meal_img = meal['strMealThumb']
        }
        if (meal['strSource']) {
            meal_source = meal['strSource']
        }
        if (meal['strYoutube']) {
            meal_video = meal['strYoutube']
        }

        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                meal_ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
            }
        }

        this.setState({
            meal_ingredients,
            meal_img,
            meal_video,
            meal_source,
            meal_category,
            meal_area,
            meal_instructions,
            meal_name,
            loading: false
        })

        console.log(meal)
    }

    render() {
        let {
            meal_ingredients,
            meal_img,
            meal_video,
            meal_source,
            meal_category,
            meal_area,
            meal_instructions,
            meal_name,
        } = this.state
        return (
            <>
                <div className="flex-cover">
                    <div className="meal-name">
                        <h1>{meal_name}</h1>
                    </div>
                </div>
                <div className="flex-cover">
                    <button className='btn meal-button btn-lg' onClick={() => this.buttonClick()}>Get New Meal</button>
                </div>

                <div className="grid-cover">
                    <div className="meal-ingredients cover">
                        <h2 className='heading'>Ingredients</h2>
                        <br />
                        <div >
                            <ol className='ingredient-list'>
                                {meal_ingredients.map(ingredient => (
                                    <li>{ingredient}</li>
                                ))}
                            </ol>
                        </div>

                    </div>

                    <div className="meal-media cover">
                        <div>
                            <h4>Category - {meal_category}</h4>
                            <h4>Region - {meal_area}</h4>
                            <br />
                        </div>
                        <div className="img-container">
                            <img src={meal_img} alt="" className="image" />
                        </div>
                        <br />
                        <div className="img-container">
                            <video src={meal_video} width='100%' height='300' controls ></video>
                        </div>
                    </div>

                    <div className="meal-instructions cover">
                        <h2 className='heading'>Instructions</h2>
                        <p>{meal_instructions}</p>
                        <a href={meal_source} className='meal-link'>{meal_source}</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Meal
