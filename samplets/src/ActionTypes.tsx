export enum TypeKeys {
    INC = "INCREMENT",
    DEC = "DECREMENT",
    ZERO = "ZERO",
    OTHER_ACTION = ""
  }


// export type IncrementCounterAction = ({
//     type:TypeKeys.INC,
//     by:number,
//     temp:string
// })

// export type DecrementCounterAction = ({
//     type:TypeKeys.DEC,
//     by:number
// })

// export type ZeroCounterAction = ({
//     type:TypeKeys.ZERO,
//     by:number
// })
// export type OtherAction = ({
//     type:TypeKeys.OTHER_ACTION
// })

export interface IncrementCounterAction {
    type:TypeKeys.INC,
    by:number
}


export interface DecrementCounterAction {
    type:TypeKeys.DEC,
    by:number
}

export interface ZeroCounterAction {
    type:TypeKeys.ZERO,
    by:number
}
export interface OtherAction {
    type:TypeKeys.OTHER_ACTION
}


export const incrementCounter = (by: number): IncrementAction => ({
    type: TypeKeys.INC,
    by
  });



export type CounterActions =  IncrementCounterAction | DecrementCounterAction | ZeroCounterAction | OtherAction

