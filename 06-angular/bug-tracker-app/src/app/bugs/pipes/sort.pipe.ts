import { Pipe, PipeTransform } from "@angular/core";

interface Comparer<T> {
    (x: T, y: T): number
}

@Pipe({
    name: 'sort',
    pure : true
})
export class SortPipe<T> implements PipeTransform {
    private getComparerFor(attrName: keyof T): Comparer<T> {
        return (x: T, y: T): number => {
            if (x[attrName] < y[attrName]) return -1
            if (x[attrName] > y[attrName]) return 1
            return 0
        }
    }

    private getDescComparerFor(comparer: Comparer<T>): Comparer<T> {
        return (x: T, y: T): number => {
            return comparer(x, y) * -1
        }
    }

    transform(list: T[], attrName: keyof T, descending: boolean = false): T[] {
        // console.info("sort.transform triggered")
        if (!list ) return list
        let comparer = this.getComparerFor(attrName)
        if (descending) {
            comparer = this.getDescComparerFor(comparer)
        }
        return list.sort(comparer)
    }

}



// type ComparerFn = (x : any ,y : any) => number

/* interface Comparer {
    (x: any, y: any) : number
}

@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform {
    private getComparerFor(attrName : string) : Comparer {
        return (x : any, y : any) : number => {
            if (x[attrName] < y[attrName]) return -1
            if (x[attrName] > y[attrName]) return 1
            return 0
        }
    }

    private getDescComparerFor(comparer : Comparer) : Comparer {
        return (x : any, y : any) : number => {
            return comparer(x, y) * -1
        }
    }

    transform(list: any[], attrName: string, descending : boolean = false) : any[] {
        let comparer = this.getComparerFor(attrName)
        if (descending){
            comparer = this.getDescComparerFor(comparer)
        }
        return list.sort(comparer)
    }

}
 */
/* 
export class SortPipe<T> implements PipeTransform{
    transform(list: T[], attrName : keyof T, ) {
        throw new Error("Method not implemented.");
    }

} */