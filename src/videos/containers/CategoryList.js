import React from 'react';
import {FlatList} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../../sections/components/HorizontalSeparator';
import Category from '../components/Category';
import CategoryListLayout from '../components/CategoryListLayout';
//redux
import {connect} from 'react-redux';

class CategoryList extends React.Component {
  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator color="#eaeaea" />;
  renderItem = ({item}) => {
    return <Category {...item} />;
  };
  render() {
    return (
      <CategoryListLayout title="Categorias">
        <FlatList
          horizontal={true}
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </CategoryListLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.categoryList,
  };
};

export default connect(mapStateToProps)(CategoryList);
