export class TableActions {
  viewItemDetails!: (x: any, y: any) => Promise<void>
  toggleFav!: (x: any) => void
  search!: (x: string) => void
  goHome!: () => void
  toggleSpinner!: () => void
}
