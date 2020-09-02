


import {
  Button,
  DatePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Input,
  InputNumber,
  Link,
  Message,
  Pagination,
  Table,
  TableColumn,
  TimeSelect
} from 'element-ui'

export default {
  name: 'c-grid',
  props: {
    ...Table.props,
    value: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => { }
    },
  },
  methods: {
    renderTable(h) {
      const { value, data: { columns }, rowKey } = this
      const table = (
        <div class="c-grid-container">
          <Table
            data={value}
            rowKey={rowKey}
            class="c-grid-body"
            ref="table"
          >
            {this.tableColumn(h)}
          </Table>
        </div>
      )
      return table
    },
    tableColumn(h) {
      const { data: { columns }, value } = this
      return columns.map((item, index) => {
        return this.getRenderNestColumn(h, item)
      })
    },
    getRenderNestColumn(h, column) {
      const buttonScope = this.$scopedSlots.action
      const { label, name, width, format, events = {}, minWidth = '150',
        fixed = 'right',
        align = 'center'} = column
      return (
        <TableColumn
          label={label}
          prop={name}
          width={width}
          minWidth={minWidth}
          fixed={fixed}
          align={align}>
          {/* {...{
              
            on: {
              ...events
            }
          }} */}
        </TableColumn>
      )
    },
  },
  render() {
    const table = this.renderTable(h)
    return (
      <div class="c-grid">
        {table}
      </div>
    )
  }
}