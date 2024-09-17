import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { IProduct } from '../interface/product.interface';




@Injectable({
  providedIn: 'root'
})
export class ProductIccService  {
  private dbPath = '/product-icc';

  constructor(private db: AngularFireDatabase) {

  }

  getAll(): Observable<IProduct[]> {
    return this.db.list<IProduct>(this.dbPath).snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key!, ...c.payload.val()! }))),
      catchError(this.handleError<IProduct[]>('getAll', []))
    );
  }

  getById(key: string): Observable<IProduct | null> {
    return this.db.object<IProduct>(`${this.dbPath}/${key}`).valueChanges().pipe(
      map(data => data ? { ...data, key } : null),
      catchError(this.handleError<IProduct | null>(`getById id=${key}`))
    );
  }


  getProductBySlug(slug: string): Observable<IProduct | null> {
    return this.db.list<IProduct>(this.dbPath, ref => ref.orderByChild('slug').equalTo(slug))
      .snapshotChanges()
      .pipe(
        map(changes => {
          if (changes.length > 0) {
            const change = changes[0];
            return { key: change.payload.key!, ...change.payload.val()! };
          }
          return null;
        }),
        catchError(this.handleError<IProduct | null>(`getProductBySlug slug=${slug}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      //có thể thêm logic để gửi lỗi đến service log ở đây
      return of(result as T);
    };
  }
}
