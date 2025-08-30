export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Work'),
      S.documentTypeListItem('services').title('Services'),
      S.documentTypeListItem('packages').title('Packages'),
      S.documentTypeListItem('post').title('Articles'),
  
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project', 'services', 'packages', 'post'].includes(item.getId())
      ),
    ])