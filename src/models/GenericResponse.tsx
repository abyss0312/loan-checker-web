
export class GenericResponse<T>{

    Code!: number;

    validateResult!:Boolean;

    Message!:string;

    Data!: T

}