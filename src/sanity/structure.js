export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Work'),
      S.documentTypeListItem('post').title('Articles'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project', 'post'].includes(item.getId())
      ),
    ])