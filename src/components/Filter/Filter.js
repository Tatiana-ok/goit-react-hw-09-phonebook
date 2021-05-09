import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions';
import contactsSelectors from '../../redux/phonebook/phonebook-selectors';


const Filter = ({ value = '', onChangeFilter }) => {
  return (
    <>
      <label className={s.filterLabel}>
        Фильтр контактов по имени
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e =>
    dispatch(actions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
