import React, { Component } from 'react'

class Meal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
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

    get_meal(meal) {
        let meal_ingredients = []
        let meal_measurement = []
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
                meal_ingredients.push(meal[`strIngredient${i}`])
            }
            if (meal[`strMeasure${i}`]) {
                meal_measurement.push(meal[`strMeasure${i}`])
            }
        }

        this.setState({
            meal_ingredients,
            meal_measurement,
            meal_img,
            meal_video,
            meal_source,
            meal_category,
            meal_area,
            meal_instructions,
            meal_name,
            loading: false
        })
    }

    render() {
        let {
            meal_ingredients,
            meal_measurement,
            meal_img,
            meal_video,
            meal_source,
            meal_category,
            meal_area,
            meal_instructions,
            meal_name,
        } = this.state
        return (
            <div className="container">
                bam meal
                <h1>{meal_name}</h1>
            </div>
        )
    }
}

export default Meal
