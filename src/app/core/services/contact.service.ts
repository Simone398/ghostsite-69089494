import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ContactFormData } from '../models/content.models';

@Injectable({ providedIn: 'root' })
export class ContactService {
  /**
   * Simula l'invio del modulo contatti con una risposta asincrona.
   */
  submitContactForm(data: ContactFormData): Observable<'success'> {
    void data;
    const shouldFail = Math.random() < 0.2;

    return timer(900).pipe(
      switchMap(() => {
        if (shouldFail) {
          return throwError(() => new Error('Simulazione errore invio contatto'));
        }

        return of('success');
      }),
    );
  }
}
