export const User = () => {
    return(
        <>
            <tr>
				<input type="hidden" id="userId" name="id" value = "" />
				<td>
					<span class="custom-checkbox">
                        <input type="checkbox" id="data_checkbox" class="data_checkbox" name="data_checkbox" value="" />
						<label for="data_checkbox"></label>
					</span>
				</td>
				<td>Anand Raj</td>
				<td>Rajanand@gmail.com</td>
				<td>
					<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
					<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
				</td>
			</tr>
        </>
    )
}