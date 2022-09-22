declare namespace SAN {
  declare namespace Table {
    type Item = import('../ui/Table/utils').Item

    type Column<T = Item> = import('../ui/Table/utils').Column<T>
  }
}
