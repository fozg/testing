import React, { Component } from 'react'
import {StyleSheet, Text, View, AsyncStorage, Button, ListView, } from 'react-native-web';

import ListItem from '../components/ListItem';

export default class Home extends Component {
  state = {orders: []}
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }
  length = 0;
  componentDidMount () {
    this._data = [];
    setInterval(() => {
      this._onDataArrived(mock[this.length % mock.length])
      this.length ++;
    }, 1500)
  }
  
  _onDataArrived(newData) {
    this._data = this._data.concat(newData);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._data)
    }, () => {
      
    });
  }
  render() {
    const {orders} = this.state;
    return (
      <View>
        {/* {
          orders.reverse().map((o, idx) => (
            <ListItem
              key={idx + o.i}
              item={o}
            />
          ))
        } */}
        <ListView
          ref='listview'
          dataSource={this.state.dataSource}
          renderRow={(item) => <ListItem item={item}></ListItem>}
          inverted={1}

        />
      </View>
    )
  }
}

const mock = [{"i":"628810487239665_1874683629319005","g":"100003851165799","f":"Lê Thủy Chinh","m":"ai ăn gì e ship nào nhận ship hoá đơn từ 60k gimbap 30k chiên 35k nem rán 35k 10c cơm sườn 55k cơm gà 50k soup gà 30k mỳ ý sốt thịt bò 45k...\nKhác.","u":"2018-03-27T01:12:02","p":"","l":false,"x":"0","y":"0","s":"60","sd":583},{"i":"473415199358860_1871396309560735","g":"1017465595055654","f":"Minh Đức","m":"1 miến trộn về 81 khâm thiên. Ship 30k.","u":"2018-03-27T01:07:56","p":"","l":false,"x":"21.019172","y":"105.835715","s":"30","sd":1,"a":""},{"i":"911657138855094_1988490904505040","g":"860103617497014","f":"vịt Vịt","m":"Ngõ 2B khám thiên đi ngõ 211 khương trung. Ứng 80k. Ship 30k. Đi luôn. 01653921919.","u":"2018-03-27T00:59:57","p":"01653921919","l":false,"x":"20.993774","y":"105.817253","s":"30","sd":3,"a":""},{"i":"911657138855094_1988490367838427","g":"203213983498015","f":"Linh Trương","m":"43 vĩnh hưng đi nguyễn thạch cơ 40k khách nhận 9h sáng.","u":"2018-03-27T00:59:24","p":"","l":false,"x":"20.989235","y":"105.874536","s":"40","sd":4,"a":""},{"i":"139316873319991_221237848461226","g":"100006992288824","f":"Cát Bụi","m":"Có bạn ship nào ở số 9_nghách 17/20 đường mỹ đình ko ah..alo mình 01686621612.","u":"2018-03-27T00:58:36+07:00","p":"01686621612","x":"21.020615","y":"105.776427","s":"","l":false,"sd":2},{"i":"911657138855094_1988483127839151","g":"534230240242353","f":"Nhi Anh","m":"M can ship sang mai qua 13 lĩnh nam số nhà 125 lấy hàng rồi ship luôn qua 169 ngõ 158 ngọc hà. Ship trước 7h sáng ạ ! \nShip 40k nhé\nỨng 100k\nAi nhận cmt ạ.","u":"2018-03-27T00:52:59","p":"","l":false,"x":"20.991027","y":"105.863968","s":"40","sd":1,"a":""},{"i":"628810487239665_1874668922653809","g":"1570950994","f":"Thảo Mọt","m":"273 Bạch Mai --> 292 Nghi Tàm Ứng 120k. Ship 40k. Call 0914868692 Đồ ăn đi luôn..","u":"2018-03-27T00:52:24","p":"0914868692","l":false,"x":"20.995964","y":"105.849971","s":"40","sd":534},{"i":"911657138855094_1988482454505885","g":"100004167273401","f":"Dung Hiền Ng","m":"Có ai đi mua hộ e mì đc ko ạ hic ship sag bên lbien ạ.","u":"2018-03-27T00:51:54+07:00","p":"","x":null,"y":null,"s":"","l":false,"sd":21},{"i":"911657138855094_1988482264505904","g":"1570950994","f":"Thảo Mọt","m":"273 Bạch Mai --> 292 Nghi Tàm\nỨng 120k. Ship 40k.\nCall 0914868692\nĐồ ăn đi luôn..","u":"2018-03-27T00:51:39+07:00","p":"0914868692","x":"20.995964","y":"105.849971","s":"40","l":false,"sd":533},{"i":"911657138855094_1988480437839420","g":"1669147378","f":"Đoàn Giang","m":"Tầm 45p nữa mình cần lấy đồ ăn ở ngõ Văn Chương (Tôn Đức Thắng) ship về 370 Nguyễn Văn Cừ. Ứng hơn 200k ship 50k ai tiện đường đi hộ mình mới ạ.","u":"2018-03-27T00:49:18+07:00","p":"","x":"21.021199","y":"105.835016","s":"50","l":false,"sd":74}]
