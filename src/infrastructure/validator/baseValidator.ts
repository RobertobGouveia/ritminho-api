interface BaseValidator <Tinput> {
    validate(input: Tinput) : Promise <void>
}
export default BaseValidator;