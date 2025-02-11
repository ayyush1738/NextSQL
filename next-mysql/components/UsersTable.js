export const UsersTable = () =>{
    return(
        <>
            <table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll"/>
								<label for="selectAll"></label>
							</span>
						</th>
						<th>Name</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
                        <input type="hidden" id="userId" name="id" value = "" />
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="data_checkbox" class="data_checkbox" name="data_checkbox" value="" />
								<label for="data_checkbox"></label>
							</span>
						</td>
						<td>Anand Raj</td>
						<td>Rajanand9039@gmail.com</td>
						<td>
							<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
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
				</tbody>
			</table>
        </>
    )
}