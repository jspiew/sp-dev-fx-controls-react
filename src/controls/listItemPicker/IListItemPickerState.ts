export interface IListItemPickerState {
  noresultsFoundText: string;
  showError: boolean;
  errorMessage: string;
  suggestionsHeaderText:string;
  preloadedItems: { key: string; name: string }[];
}
