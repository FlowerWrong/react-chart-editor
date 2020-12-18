import Field from './Field';
import PropTypes from 'prop-types';
import {Component} from 'react';
import {connectToContainer} from 'lib';
import CreatableDropdownWidget from '../widgets/CreatableDropdown';

export class UnconnectedGeoJson extends Component {

  render() {
    return (
      <Field {...this.props}>
        <CreatableDropdownWidget
          backgroundDark={this.props.backgroundDark}
          options={this.props.options}
          value={this.props.fullValue}
          onChange={(value) => this.props.updatePlot(value)}
          clearable={this.props.clearable}
          disabled={this.props.disabled}
          components={this.props.components}
        />
      </Field>
    );
  }
}

UnconnectedGeoJson.propTypes = {
  backgroundDark: PropTypes.bool,
  components: PropTypes.object,
  clearable: PropTypes.bool,
  fullValue: PropTypes.any,
  options: PropTypes.array.isRequired,
  updatePlot: PropTypes.func,
  disabled: PropTypes.bool,
  ...Field.propTypes,
};

UnconnectedGeoJson.displayName = 'UnconnectedGeoJson';

function modifyPlotProps(props, context, plotProps) {
  if (context.container.type === 'choroplethmapbox' || context.container.type === 'choropleth') {
    plotProps.isVisible = true;
  }
}

export default connectToContainer(UnconnectedGeoJson, {modifyPlotProps});
