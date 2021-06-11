import {colors} from '@utils/Colors';
import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  onPress?: () => void;
}
const OrderCategoryView = forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    close: () => _close(),
    open: () => _open(),
  }));

  const _open = useCallback(() => {
    setVisible(true);
  }, []);

  const _close = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={_close}
      onBackdropPress={_close}
      hideModalContentWhileAnimating
      style={styles.sheetView}>
      <View style={styles.modalContainer}>
        <Text>I am the modal content!</Text>
      </View>
    </Modal>
  );
});

// cach dung thu 2
// class OrderCategoryView extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       visible: false,
//     };
//   }

//   open = () => this.setState({visible: true});

//   close = () => this.setState({visible: false});

//   render() {
//     const {visible} = this.state;
//     return (
//       <Modal
//         isVisible={visible}
//         onBackButtonPress={this.close}
//         onBackdropPress={this.close}
//         hideModalContentWhileAnimating
//         style={styles.sheetView}>
//         <View style={styles.modalContainer}>
//           <Text>I am the modal content!</Text>
//         </View>
//       </Modal>
//     );
//   }
// }

const styles = StyleSheet.create({
  sheetView: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: 300,
    backgroundColor: colors.white,
  },
});

export default OrderCategoryView;
