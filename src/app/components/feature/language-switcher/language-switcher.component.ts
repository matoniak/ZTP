import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LanguageStateOption } from '@app/shared/interfaces/language-state-options.interface';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@Component({
  selector: 'language-switcher',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SelectButton],
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  languageOptions: LanguageStateOption[] = [
    { label: 'Polish', value: 'pl' },
    { label: 'English', value: 'en' },
  ];

  readonly languageForm = new FormGroup({
    value: new FormControl('english'),
  });
}
