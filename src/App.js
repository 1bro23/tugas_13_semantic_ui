import 'semantic-ui-css/semantic.min.css'
import {
  Grid,
  Segment,
  Icon,
  Search,
  Header,
  Divider,
  Button,
  Placeholder,
  List,
  Menu,
  Table,
  Label
} from 'semantic-ui-react'

function App() {
  return (
   <Grid>
    <Grid.Row>
      <Grid.Column>
        <Segment>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column width='50%'>
                <Header icon>
                  <br/><br/>
                  <Icon name='search'/>
                  Cari Document
                </Header>
                <Search placeholder='Search document...'/>
                <br/><br/>
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name='pdf file outline'/>
                  Tambah Document Baru
                </Header>
                <br/>
                <Button color='primary' content='Create Document'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Segment>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line/>
              <Placeholder.Line/>
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line/>
              <Placeholder.Line/>
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column width={7}>
        <Segment>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line/>
              <Placeholder.Line/>
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line/>
              <Placeholder.Line/>
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <Header as='h3'>
          Website Terkait
        </Header>
        <List>
          <List.Item icon='linkify' content={<a href='https://www.google.com' target='blank'>Google</a>}/>
          <List.Item icon='linkify' content={<a href='https://www.facebook.com' target='blank'>Facebook</a>}/>
          <List.Item icon='linkify' content={<a href='https://react.semantic-ui.com' target='blank'>Semantic UI</a>}/>
          <List.Item icon='linkify' content={<a href='https://www.niomic.com' target='blank'>Niomic</a>}/>
          <List.Item icon='linkify' content={<a href='https://www.reactjs.org' target='blank'>react</a>}/>
        </List>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='right' colSpan='2'>
                  <Menu.Item>
                    <Search placeholder='Search document...'/>
                  </Menu.Item>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>
                Nama Document
              </Table.HeaderCell>
              <Table.HeaderCell>
                Jenis File
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell textAlign='center'>
                PDF
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Panduan Belajar CSS
              </Table.Cell>
              <Table.Cell textAlign='center'>
                PDF
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Panduan Belajar React JS
              </Table.Cell>
              <Table.Cell textAlign='center'>
                PDF
              </Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left'/>
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right'/>
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Grid.Column>
    </Grid.Row>
   </Grid>
  );
}

export default App;
