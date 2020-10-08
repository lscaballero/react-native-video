import React, {Component} from 'react';
import {FlatList, ScrollView} from 'react-native';
import SuggestionListLayout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';
//redux
import {connect} from 'react-redux';

class SuggestionsList extends Component {
  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator color="#eaeaea" />;
  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      },
    });
  };
  renderItem = ({item}) => {
    return (
      <Suggestion
        {...item}
        onPress={() => {
          this.viewMovie(item);
        }}
      />
    );
  };

  render() {
    return (
      <ScrollView scrollEnabled={true}>
        <SuggestionListLayout title="Recomendado para ti">
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.list}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
          />
        </SuggestionListLayout>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.categoryList,
  };
};

export default connect(mapStateToProps)(SuggestionsList);
