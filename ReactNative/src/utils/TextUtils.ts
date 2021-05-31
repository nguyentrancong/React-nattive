import _, {isEmpty, round, startsWith} from 'lodash';

class TextUtils {
  static truncate = (string: string, length: number, tail?: string) => {
    if (!_.isNil(tail)) {
      length -= tail.length;
    }
    if (_.isEmpty(string) || string.length <= length) {
      return string;
    }

    const trimmedString = string.substr(0, length);
    return (
      trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')),
      ) + (tail ? tail : '')
    );
  };

  static validateEmail = (email: string) => {
    const re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    return re.test(String(email).toLowerCase());
  };

  static validatePassWord = (verify_password: string) => {
    const re = /^\w{6,}$/;
    return re.test(String(verify_password));
  };

  static validatePhone = (phone: string) => {
    if (_.isEmpty(phone)) {
      return false;
    }
    const re = /\b(0|84)([9|8|3|5|7])+([0-9]{8})\b/g;
    return re.test(String(phone.replace(/\s/g, '')).toLowerCase());
  };

  static getNumberValue = (string: string) => {
    if (_.isEmpty(string)) {
      return string;
    }
    return parseInt(string.replace(/[^\d\.]/g, ''));
  };

  static unCapitalize = (string: string) => {
    const newString = _.clone(string);
    return newString.charAt(0).toLowerCase() + newString.slice(1);
  };

  static capitalize = (string: string) => {
    const newString = _.clone(string);
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  };

  static transferNormalString = (str: string) => {
    str = str.toLowerCase().trim();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');

    return str;
  };

  static getAvatarInitials = (textString: string) => {
    if (!textString || typeof textString !== 'string') {
      return '';
    }

    const text = textString.trim();

    const textSplit = text.split(' ');

    if (textSplit.length <= 1) {
      return text.charAt(0);
    }

    const initials = (
      textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0)
    ).replace(/[^0-9a-z]/gi, ''); // remove non characters

    return initials;
  };

  static isValidURL(str: string) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator
    return !!pattern.test(str);
  }

  // đổi số 84 ở đầu string thành 0
  static parsePubCodeToPhone = (str?: string) => {
    if (typeof str !== 'string') {
      return str;
    }

    let phoneNumber = '';
    if (!isEmpty(str)) {
      if (startsWith(str, '84')) {
        phoneNumber = str.replace('84', '0');
      } else {
        phoneNumber = str;
      }
    }
    return phoneNumber;
  };

  static roundedWithAbbreviations(count: number) {
    let thousand = count / 1000;
    let million = count / 1000000;
    if (million >= 1.0) {
      const result = round(million, 1);
      return result + 'M';
    } else if (thousand >= 1.0) {
      const result = round(thousand, 1);
      return result + 'K';
    } else {
      return `${count}`;
    }
  }

  static getPlayTimeString(time: number) {
    if (Number.isNaN(time)) {
      return '';
    }

    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time / 60) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    // const string = `${hours < 10 ? `0${hours}` : hours}:${
    //   minutes < 10 ? `0${minutes}` : minutes
    // }:${seconds < 10 ? `0${seconds}` : seconds}`;

    const string = `${hours}:${minutes}:${seconds}`;
    return string;
  }

  static strippedString(original: string) {
    let strippedString = original.replace(/(<([^>]+)>)/gi, '');
    return strippedString;
  }
}

export default TextUtils;
