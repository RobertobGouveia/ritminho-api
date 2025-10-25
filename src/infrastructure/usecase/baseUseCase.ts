interface BaseUseCase <Tinput, Toutput> {
    execute(input?: Tinput) : Promise <Toutput>
}
export default BaseUseCase;