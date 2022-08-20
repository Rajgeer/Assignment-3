import axios from 'axios';

export function requestApi(
  config = {},
  onLoad = () => {},
  onSuccess = () => {},
  onFailure = () => {},
) {
  onLoad();
  axios(config)
    .then(response => {
      const {
        data: {record, metadata},
      } = response;
      onSuccess(record, metadata);
    })
    .catch(err => {
      onFailure({err: true, message: err.message});
    });
}
