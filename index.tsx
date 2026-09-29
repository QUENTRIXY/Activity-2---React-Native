import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>My Profile</Text>
          <Text style={styles.subtitle}>Manage your account</Text>
        </View>

        <View style={styles.profileCard}>
          <Image
            source={require('../../assets/profile.jpg')}
            style={styles.profileImage}
          />

          <Text style={styles.name}>Quen Trixy</Text>
          <Text style={styles.email}>quentrixy@email.com</Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.icon}>👤</Text>
            <Text style={styles.menuText}>Personal Information</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.icon}>🔔</Text>
            <Text style={styles.menuText}>Notifications</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.icon}>🔒</Text>
            <Text style={styles.menuText}>Privacy & Security</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.icon}>⚙️</Text>
            <Text style={styles.menuText}>Settings</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },

  header: {
    padding: 25,
    paddingBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#22223B',
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
    marginTop: 5,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 3,
  },

  profileImage: {
    width: 95,
    height: 95,
    borderRadius: 50,
    marginBottom: 12,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#22223B',
  },

  email: {
    color: '#777',
    marginTop: 5,
  },

  editButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 11,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginTop: 18,
  },

  editText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  menu: {
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 20,
    paddingHorizontal: 15,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },

  icon: {
    fontSize: 21,
    width: 40,
  },

  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  arrow: {
    fontSize: 28,
    color: '#999',
  },

  logout: {
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#FFE9E9',
  },

  logoutText: {
    color: '#E74C3C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});