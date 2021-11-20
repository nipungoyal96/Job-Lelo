export default class APIService {
    constructor() {}

    static GetUsersData = () => {
        return new Promise((resolve, reject) => {

          fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json').then((response) => {
            if (response.status !== 200) {
              resolve(response.text());
            } else {
              resolve(response.text());
            }
          }).catch(err => {
            reject(err);
          });
        });
      }
}