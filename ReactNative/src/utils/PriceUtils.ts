import numeral from 'numeral';

if (numeral.locales.vn === undefined) {
  numeral.register('locale', 'vn', {
    delimiters: {
      thousands: '.',
      decimal: ',',
    },
  });
  numeral.locale('vn');
}

export default class PriceUtils {
  static format = (price: string | number, currency: string = '₫') => {
    if (typeof price !== 'number' && typeof price !== 'string') {
      return price;
    }

    if (typeof price === 'string') {
      if (price.indexOf(currency) !== -1) {
        return price;
      }
      return price + currency;
    }

    return numeral(price).format('0,0').replace(/,/g, '.') + currency;
  };

  static removeDot = (value: string) => {
    return value
      .toString()
      .replace(/\./g, '')
      .replace(/\,/g, '')
      .replace(/[^\d\.]/g, '');
  };

  static formateSalePrice = (
    price: string | number,
    currency: string = '₫',
  ) => {
    if (typeof price !== 'number' && typeof price !== 'string') {
      return price;
    }

    const parsedPrice = numeral(price).format('0,0').replace(/,/g, '.');

    if (parsedPrice.length === 5) {
      return '?' + parsedPrice.substr(1) + currency;
    } else if (parsedPrice.length > 5) {
      const first = parsedPrice.substr(0, 1);
      const neededParse = parsedPrice.substr(1, parsedPrice.length - 5);
      const tail = parsedPrice.substr(
        parsedPrice.length - 4,
        parsedPrice.length,
      );

      return first + neededParse.replace(/[0-9]/g, '?') + tail + currency;
    }

    return parsedPrice + currency;
  };

  static kFormatter = (num: number) => {
    if (!num) return 0;
    if (num === 0) {
      return '0K';
    }
    let fixed;
    if (num < 1000000) {
      fixed = (Math.abs(num) / 1000).toFixed(1);
      return Math.abs(num) > 999
        ? Math.sign(num) * parseFloat(fixed) + 'K'
        : Math.sign(num) * Math.abs(num);
    } else fixed = (Math.abs(num) / 1000000).toFixed(1);
    return Math.abs(num) > 999999
      ? Math.sign(num) * parseFloat(fixed) + 'M'
      : Math.sign(num) * Math.abs(num);
  };

  static XFormatter = (num: number) => {
    if (!num) return 0;
    if (num === 0) {
      return '0K';
    }
    let fixed;
    if (num < 1000000) {
      fixed = (Math.abs(num) / 1000).toFixed(1);
      return Math.abs(num) > 999
        ? Math.sign(num) * parseFloat(fixed) + 'K'
        : Math.sign(num) * Math.abs(fixed) + 'K';
    } else fixed = (Math.abs(num) / 1000000).toFixed(1);
    return Math.abs(num) > 999999
      ? Math.sign(num) * parseFloat(fixed) + 'M'
      : Math.sign(num) * Math.abs(num);
  };

  static milionFormater = (num: number) => {
    if (num === 0) {
      return '0tr';
    }

    if (num < 1000000) {
      return PriceUtils.format(num);
    } else {
      const fixed = (Math.abs(num) / 1000000).toFixed(1);
      return Math.abs(num) > 999999
        ? Math.sign(num) * parseFloat(fixed) + 'tr'
        : Math.sign(num) * Math.abs(num);
    }
  };
}
