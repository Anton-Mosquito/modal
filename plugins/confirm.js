$.confirm = function(options) {
  return new Promise((res,rej) => {
    const modal = $.modal({
      title: options.title,
      with: '400px',
      closable: false,
      content: options.content,
      onClose() {
        modal.destroy();
      },
      footerButtons: [
        {
          text: 'Cancel',
          type: 'secondary',
          handler() {
            modal.close();
            reject();
          }
        },
        {
          text: 'Delete',
          type: 'danger',
          handler() {
            modal.close();
            resolve();
          }
        }
      ],
    })

    setTimeout(() => modal.open(), 100);
    
  });
};