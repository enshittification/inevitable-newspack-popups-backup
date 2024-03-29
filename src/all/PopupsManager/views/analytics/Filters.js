/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';

import { OFFSETS } from './consts';

const Info = ( { filtersState, labelFilters, eventActionFilters, onChange, disabled } ) => {
	return (
		<div className="newspack-popups-manager-analytics__filters">
			<div className="newspack-popups-manager-analytics__filters__group">
				<SelectControl
					options={ [
						{ label: __( 'All Campaigns', 'newspack-popups' ), value: '' },
						...labelFilters,
					] }
					onChange={ onChange( 'SET_EVENT_LABEL_FILTER' ) }
					value={ filtersState.event_label_id }
					disabled={ disabled }
				/>
				<SelectControl
					options={ [
						{ label: __( 'All Events', 'newspack-popups' ), value: '' },
						...eventActionFilters,
					] }
					onChange={ onChange( 'SET_EVENT_ACTION_FILTER' ) }
					value={ filtersState.event_action }
					disabled={ disabled }
				/>
			</div>
			<SelectControl
				options={ OFFSETS }
				onChange={ onChange( 'SET_OFFSET_FILTER' ) }
				value={ filtersState.offset }
				disabled={ disabled }
			/>
		</div>
	);
};

export default Info;
